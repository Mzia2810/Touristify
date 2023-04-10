export interface OnboardingProps {
    screenName: string;
    navigation?: string; 
}

export interface OnboardingPropsTwo {
    backgroundColor:string;

}


export type mainProps = OnboardingProps&OnboardingPropsTwo;