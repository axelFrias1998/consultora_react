import React from "react";
import { View } from "react-native";
import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea,
        StyledTextInput, StyledInputLabel, LeftIcon, RightIcon, StyledButton, ButtonText} from "./../components/styles"
import { StatusBar } from "expo-status-bar";
//formik
import { Formik } from "formik";
//icons
import { Octicons } from "@expo/vector-icons";



const Login = () => {
    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={{uri: "https://th.bing.com/th/id/R.e57e5808c9ce3679c17ed47fd7cd12d2?rik=NH5wGpiO%2b3mPFg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_258083.png&ehk=zTjdaif7gRiY5rck%2floyeZ8JEjXMWuj7xbBvkxxjY3M%3d&risl=&pid=ImgRaw&r=0"}}></PageLogo>
                <PageTitle>Yelsen Consultora</PageTitle>
                <SubTitle>Account Login</SubTitle>
                
                <Formik 
                    initialValues={{email: '', password: ''}} 
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) =>  (
                        <StyledFormArea>
                            <TextInput 
                                label="Email" 
                                icon="mail" 
                                placeholder="correo@gmail.com" 
                                placeholderTextColor="#9CA3AF" 
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            <TextInput 
                                label="Password" 
                                icon="lock" 
                                placeholder="*****" 
                                placeholderTextColor="#9CA3AF" 
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                                value={values.password}
                            />
                        </StyledFormArea>
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

const TextInput = ({label, icon, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color="#6D28D9"/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
        </View>
    );
};   

export default Login;