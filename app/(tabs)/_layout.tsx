// Import Modulues
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: { // component which takes in props (name and color) (name will be recognized by FontAwesome)
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />; // returns FontAwesome component with mentioned props
}

export default function TabLayout() { // declares component named Tab Layout , export default means this is the primary export of the file
  const colorScheme = useColorScheme(); // stores currrent color scheme under constant variable "colorScheme"

  return (
    <Tabs // sets up tab based navigation layout
      screenOptions={{ // screenOptions = prop which determines global options for tab screens
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true), // decides to show the header based on the environment (web or mobile)
      }}>
      <Tabs.Screen // represents an individual tab screen within the Tabs component
        name="index" // indentifier of this screen
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,// defines the icon used, it uses the TabBarIcon component to determine color and name 
          headerRight: () => ( // custom element on right side of header , Link component to /modal (asChild means Link should pass it's behavior on)
            <Link href="/modal" asChild> 
              <Pressable>  
                {({ pressed }) => (
                  <FontAwesome
                    // Calling FontAwesomes icons, makes it pressable (above and below)
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }} // Opacity changes if(?) pressed (True : False)
                  />
                )}
              </Pressable>
            </Link> // ends link and pressable behavior
          ),
        }}
      />
      <Tabs.Screen // Gives another option for tab two (linked to two.tsx), doesn't give option of modal info circle
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
