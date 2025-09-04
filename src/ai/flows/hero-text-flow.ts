'use server';
/**
 * @fileOverview A flow for generating phrases for the hero section typing animation.
 *
 * - getHeroPhrases - A function that returns a list of phrases.
 * - HeroPhrasesOutput - The return type for the getHeroPhrases function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const HeroPhrasesOutputSchema = z.object({
  phrases: z
    .array(z.string())
    .describe('A list of 2-3 word phrases related to creator economy jobs.'),
});
export type HeroPhrasesOutput = z.infer<typeof HeroPhrasesOutputSchema>;

const prompt = ai.definePrompt({
  name: 'heroPhrasesPrompt',
  output: {schema: HeroPhrasesOutputSchema},
  prompt: `You are a creative copywriter. Generate a list of 5 exciting, short (2-3 words) phrases about jobs in the creator economy. These will be used in a typing animation on a job board website's hero section. Examples: "Video Gigs", "Editing Roles", "Design Talent". Make them catchy and relevant to creators, influencers, and social media professionals.`,
});

const getHeroPhrasesFlow = ai.defineFlow(
  {
    name: 'getHeroPhrasesFlow',
    outputSchema: HeroPhrasesOutputSchema,
  },
  async () => {
    const {output} = await prompt();
    return output!;
  }
);

export async function getHeroPhrases(): Promise<HeroPhrasesOutput> {
  return getHeroPhrasesFlow();
}
