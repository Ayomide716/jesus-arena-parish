'use server';
/**
 * @fileOverview This file defines a Genkit flow for summarizing extracted text from a document.
 *
 * - summarizeExtractedText - A function that takes extracted text as input and returns a summarized version.
 * - SummarizeExtractedTextInput - The input type for the summarizeExtractedText function.
 * - SummarizeExtractedTextOutput - The return type for the summarizeExtractedText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeExtractedTextInputSchema = z.object({
  extractedText: z
    .string()
    .describe('The extracted text from the document to be summarized.'),
});
export type SummarizeExtractedTextInput = z.infer<
  typeof SummarizeExtractedTextInputSchema
>;

const SummarizeExtractedTextOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the extracted text.'),
});
export type SummarizeExtractedTextOutput = z.infer<
  typeof SummarizeExtractedTextOutputSchema
>;

export async function summarizeExtractedText(
  input: SummarizeExtractedTextInput
): Promise<SummarizeExtractedTextOutput> {
  return summarizeExtractedTextFlow(input);
}

const summarizeExtractedTextPrompt = ai.definePrompt({
  name: 'summarizeExtractedTextPrompt',
  input: {schema: SummarizeExtractedTextInputSchema},
  output: {schema: SummarizeExtractedTextOutputSchema},
  prompt: `Summarize the following text, providing a concise overview of the content:\n\n{{extractedText}}`,
});

const summarizeExtractedTextFlow = ai.defineFlow(
  {
    name: 'summarizeExtractedTextFlow',
    inputSchema: SummarizeExtractedTextInputSchema,
    outputSchema: SummarizeExtractedTextOutputSchema,
  },
  async input => {
    const {output} = await summarizeExtractedTextPrompt(input);
    return output!;
  }
);
