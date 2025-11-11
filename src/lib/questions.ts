import { asset } from '@/lib/assets';

export const genderQuestion = {
  id: 'gender',
  prompt: 'What is your gender?',
  description: 'We will use this to personalize your plan',
  options: [
    { id: 'male', label: 'Male', image: asset('/images/male.png') },
    { id: 'female', label: 'Female', image: asset('/images/female.png') },
  ],
};
