'use server';
/**
 * @fileOverview A flow for generating social media platform names for the hero section typing animation.
 *
 * - getHeroPhrases - A function that returns a list of social media platforms.
 * - HeroPhrasesOutput - The return type for the getHeroPhrases function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const HeroPhrasesOutputSchema = z.object({
  phrases: z
    .array(z.string())
    .describe('A list of the top 25 popular social media platform names.'),
});
export type HeroPhrasesOutput = z.infer<typeof HeroPhrasesOutputSchema>;

const prompt = ai.definePrompt({
  name: 'heroPhrasesPrompt',
  output: {schema: HeroPhrasesOutputSchema},
  prompt: `You are a creative copywriter. Generate a list of the top 25 popular social media platform names (e.g., Instagram, YouTube, Twitch, TikTok, etc.). These will be used in a typing animation.`,
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
