export const BRAIN_JSON_SCHEMA = {
  type: "object",

  additionalProperties: false,

  properties: {
    mode: {
      type: "string",
      enum: ["chat", "mission"],
    },

    workspace: {
      type: "string",
      enum: [
        "general",
        "business",
        "writing",
        "image",
        "video",
        "website",
        "research",
      ],
    },

    confidence: {
      type: "number",
    },

    reason: {
      type: "string",
    },

    provider: {
      type: "string",
      enum: [
        "gemini",
        "openai",
        "claude",
        "groq",
      ],
    },

    response: {
      type: ["string", "null"],
    },

    mission: {
      type: ["object", "null"],

      additionalProperties: false,

      properties: {
        id: {
          type: "string",
        },

        title: {
          type: "string",
        },

        tasks: {
          type: "array",

          items: {
            type: "object",

            additionalProperties: false,

            properties: {
              id: {
                type: "string",
              },

              title: {
                type: "string",
              },

              prompt: {
                type: "string",
              },

              worker: {
                type: "string",
                enum: [
                  "general",
                  "business",
                  "writing",
                  "image",
                  "video",
                  "website",
                  "research",
                ],
              },
            },

            required: [
              "id",
              "title",
              "prompt",
              "worker",
            ],
          },
        },
      },

      required: [
        "id",
        "title",
        "tasks",
      ],
    },
  },

  required: [
    "mode",
    "workspace",
    "confidence",
    "reason",
    "provider",
    "response",
    "mission",
  ],
} as const;