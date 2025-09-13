
'use server';
/**
 * @fileOverview A flow for generating social media platform names for the hero section typing animation.
 *
 * - getHeroPhrases - A function that returns a list of social media platforms with their brand colors.
 * - HeroPhrase - The type for a single social media platform object.
 * - HeroPhrasesOutput - The return type for the getHeroPhrases function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const HeroPhraseSchema = z.object({
  name: z.string().describe('The name of the social media platform.'),
  color: z
    .string()
    .describe('The primary hex color code for the brand of the social media platform (e.g., #FF0000 for YouTube).'),
});
export type HeroPhrase = z.infer<typeof HeroPhraseSchema>;

const HeroPhrasesOutputSchema = z.object({
  phrases: z
    .array(HeroPhraseSchema)
    .describe('A list of 9 popular social media platforms with their brand colors.'),
});
export type HeroPhrasesOutput = z.infer<typeof HeroPhrasesOutputSchema>;

const prompt = ai.definePrompt({
  name: 'heroPhrasesPrompt',
  output: {schema: HeroPhrasesOutputSchema},
  prompt: `You are a creative copywriter. Generate a list of 9 popular social media platforms (e.g., Instagram, YouTube, Twitch, TikTok, etc.) along with their primary brand hex color. These will be used in a typing animation.`,
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
