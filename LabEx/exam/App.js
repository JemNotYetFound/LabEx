import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [currentSection, setCurrentSection] = useState('name');

  const handlePress = () => {
    setCurrentSection(prevSection => {
      switch (prevSection) {
        case 'name':
          return 'education';
        case 'education':
          return 'about';
        case 'about':
          return 'contact';
        case 'contact':
          return 'name';
        default:
          return 'name';
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={handlePress} style={styles.contentContainer}>
          {currentSection === 'name' && (
            <View style = {styles.container}>
              <Image source={require('./assets/pic.png')} style = {styles.img}/>
              <Text style = {styles.head}>Jeremiah Yugin Asistio</Text>
              <Text style = {styles.par3}>ᴮᴬᶜᴴᴱᴸᴼᴿ ᴼᶠ ˢᶜᴵᴱᴺᶜᴱ ᴵᴺ ᴵᴺᶠᴼᴿᴹᴬᵀᴵᴼᴺ ᵀᴱᶜᴴᴺᴼᴸᴼᴳʸ</Text>
            </View>
          )}

          {currentSection === 'education' && (
            <View style = {styles.container}>
              <Text style = {styles.head2}>College</Text>
              <Text style = {styles.par}>Global Reciprocal College (2021 - Present)</Text>
              <Text style = {styles.head3}>Highschool</Text>
              <Text style = {styles.par}>Bagong Barrio National High School</Text>
              <Text style = {styles.head3}>Elementary</Text>
              <Text style = {styles.par}>Bagong Barrio Elementary School</Text>
            </View>
          )}

          {currentSection === 'about' && (
            <View style = {styles.container}>
              <Text style = {styles.head2}>About</Text>
              <Text style = {styles.par2}>
                Hi there! I'm Asistio, Jeremiah Yugin G. a passionate solo indie game developer on a mission to create unique gaming experiences. Armed with my love for pixel art and a dash of coding magic, I bring imaginative worlds to life. From concept to code, I'm a one-person powerhouse dedicated to crafting games that resonate with players. Join me on this exciting journey as we explore the boundless realms of creativity together!
              </Text>
            </View>
          )}

          {currentSection === 'contact' && (
            <View style = {styles.container}>
              <Text style = {styles.head2}>My Project</Text>
              <Image source = {require('./assets/project.png')} style = {styles.img}/>
              <Text style = {styles.head3}>Web Portfolio</Text>
            </View>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },

  img: {
    height: 250,
    width: 250,
    borderRadius: 200
  },

  head: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },

  head2: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  head3: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30, 
    textAlign: 'center'
  },

  par: {
    fontSize: 13,
    textAlign: 'center',
  },

  par3: {
    fontSize: 20,
    textAlign: 'center',
  },

  par2: {
    fontSize: 15,
    marginTop: 15,
    paddingLeft: 30, 
    paddingRight: 30,
    textAlign: 'center'
  }
  
});

export default App;