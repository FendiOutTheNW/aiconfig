import { PromptSchema } from "../../utils/promptUtils";

export const HuggingFaceImage2TextTransformerPromptSchema: PromptSchema = {
  input: {
    type: "object",
    required: ["data"],
    properties: {
      attachments: {
        type: "array",
        items: {
          type: "attachment",
          required: ["data"],
          mime_types: ["image/png"],
          properties: {
            data: {
              type: "string",
            },
          },
        },
        max_items: 1,
      },
    },
  },
  model_settings: {
    type: "object",
    properties: {
      model: {
        type: "string",
        description: `Hugging Face model to use`,
      },
    },
  },
};