
'use server';
/**
 * @fileOverview A flow for generating job posting details using AI.
 *
 * - generateJobDetails - A function that generates a job description, responsibilities, and requirements.
 * - GenerateJobDetailsInput - The input type for the generateJobDetails function.
 * - GenerateJobDetailsOutput - The return type for the generateJobDetais function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

export const GenerateJobDetailsInputSchema = z.object({
  title: z.string().describe('The title of the job.'),
  companyName: z.string().describe('The name of the company posting the job.'),
  platform: z.string().describe('The social media platform the job is for (e.g., YouTube, TikTok).'),
  jobType: z.string().describe('The type of employment (e.g., Full-time, Contract).'),
});
export type GenerateJobDetailsInput = z.infer<typeof GenerateJobDetailsInputSchema>;

export const GenerateJobDetailsOutputSchema = z.object({
  description: z.string().describe('A detailed and engaging job description (3-4 paragraphs).'),
  responsibilities: z.array(z.string()).describe('A list of 3-5 key responsibilities for the role.'),
  requirements: z.array(z.string()).describe('A list of 3-5 key requirements for the role.'),
});
export type GenerateJobDetailsOutput = z.infer<typeof GenerateJobDetailsOutputSchema>;

export async function generateJobDetails(input: GenerateJobDetailsInput): Promise<GenerateJobDetailsOutput> {
  return generateJobDetailsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateJobDetailsPrompt',
  input: {schema: GenerateJobDetailsInputSchema},
  output: {schema: GenerateJobDetailsOutputSchema},
  prompt: `You are an expert recruiter specializing in the creator economy.
  
  Generate a compelling job posting based on the following details:
  - Job Title: {{{title}}}
  - Company: {{{companyName}}}
  - Platform: {{{platform}}}
  - Job Type: {{{jobType}}}
  
  Your response should be structured with a detailed job description, a list of key responsibilities, and a list of essential requirements.
  Make the tone engaging and exciting to attract top talent in the social media space.
  `,
});

const generateJobDetailsFlow = ai.defineFlow(
  {
    name: 'generateJobDetailsFlow',
    inputSchema: GenerateJobDetailsInputSchema,
    outputSchema: GenerateJobDetailsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
