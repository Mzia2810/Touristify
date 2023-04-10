import { View, Text } from 'react-native'
import React, { useState } from 'react';
import {mainProps} from './Onboarding.d';
import { Colors } from 'constants';
import images from 'constants/images';
import fonts from 'constants/fonts';
import { headings } from 'constants/spacers';


interface users {
  name:string;
  age?:number;
  gender?:'male'  | 'female'  |'middle';

}


const Onboarding:React.FC <mainProps> = (props) => {

  const [user,setUser] = useState<Array<users>>([{

    name:'A+'

  }])

  // const {} = props;


 
  return (
    <View>
      <Text style={{[headings.h2]}}>Onboarding</Text>
    </View>
  )
}

export default Onboarding;