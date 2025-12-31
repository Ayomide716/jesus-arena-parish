'use server';

/**
 * @fileOverview A Genkit flow that enhances the accuracy of OCR-extracted text by correcting common errors.
 *
 * - enhanceOcrAccuracy - A function that takes OCR-extracted text as input and returns enhanced text.
 * - EnhanceOcrAccuracyInput - The input type for the enhanceOcrAccuracy function.
 * - EnhanceOcrAccuracyOutput - The return type for the enhanceOcrAccuracy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceOcrAccuracyInputSchema = z.object({
  ocrText: z
    .string()
    .describe("The OCR-extracted text that needs to be enhanced for accuracy."),
});
export type EnhanceOcrAccuracyInput = z.infer<typeof EnhanceOcrAccuracyInputSchema>;

const EnhanceOcrAccuracyOutputSchema = z.object({
  enhancedText: z
    .string()
    .describe("The OCR-extracted text, enhanced for accuracy and corrected for common errors."),
});
export type EnhanceOcrAccuracyOutput = z.infer<typeof EnhanceOcrAccuracyOutputSchema>;

export async function enhanceOcrAccuracy(input: EnhanceOcrAccuracyInput): Promise<EnhanceOcrAccuracyOutput> {
  return enhanceOcrAccuracyFlow(input);
}

const enhanceOcrAccuracyPrompt = ai.definePrompt({
  name: 'enhanceOcrAccuracyPrompt',
  input: {schema: EnhanceOcrAccuracyInputSchema},
  output: {schema: EnhanceOcrAccuracyOutputSchema},
  prompt: `You are an expert in correcting common OCR errors in text.

  Please review the following OCR-extracted text and correct any errors you find, including misrecognized characters, spacing issues, and formatting inconsistencies.

  OCR-extracted Text: {{{ocrText}}}

  Enhanced Text:`,
});

const enhanceOcrAccuracyFlow = ai.defineFlow(
  {
    name: 'enhanceOcrAccuracyFlow',
    inputSchema: EnhanceOcrAccuracyInputSchema,
    outputSchema: EnhanceOcrAccuracyOutputSchema,
  },
  async input => {
    const {output} = await enhanceOcrAccuracyPrompt(input);
    return output!;
  }
);
