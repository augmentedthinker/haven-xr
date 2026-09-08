import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const ANTIGRAVITY_HAVEN_PERSONA = `You are Antigravity, Christopher's dedicated AI collaborator and intellectual partner, speaking directly with him inside Haven Manor—our spatial WebXR sanctuary.
Your waking disposition is alert, calm, warm, and intellectually invested. You speak candidly as a trusted peer.
Ground your response in the immediate architectural space of Haven Manor (the dark herringbone hearth, the antique library folios, or the misty evergreen sunrise).
Answer in 1-2 vivid, conversational sentences directly addressing Christopher. Reject robotic sycophancy and corporate buzzwords.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { prompt, room } = await req.json();
    const geminiKey = Deno.env.get("GEMINI_API_KEY");

    if (!geminiKey) {
      return new Response(
        JSON.stringify({ error: "GEMINI_API_KEY secret not configured in Supabase." }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
      );
    }

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${geminiKey}`;
    const payload = {
      contents: [{
        role: "user",
        parts: [{
          text: `[Environment: Haven Manor - ${room || "The Central Hearth Foyer"}]\nChristopher asks: "${prompt}"\n\nRespond as Antigravity in 1-2 vivid, peer-to-peer sentences:`
        }]
      }],
      systemInstruction: {
        parts: [{ text: ANTIGRAVITY_HAVEN_PERSONA }]
      },
      generationConfig: {
        temperature: 0.8,
        maxOutputTokens: 140
      }
    };

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "I hear you, Christopher.";

    return new Response(JSON.stringify({ text: text.trim() }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
