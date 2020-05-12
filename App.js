/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text, Alert, Dimensions} from 'react-native';
import CustomListview from './CustomListView';

import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Calendar} from 'react-native-calendars';
import {ListItem, Card} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {Paragraph} from 'react-native-paper';

class ImpactsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsList: [
        {
          date: 'Nov 4',
          title: 'Impact Alert!',
          time: '10:42 AM IST',
          details:
            'Please contact the nearest hospital and consult a doctor about a possible concussion. Please ignore if already done so. Click on the button below to email yout coach.',
        },
        {
          date: 'Nov 7',
          title: 'Impact Alert!',
          time: '11:07 AM IST',
          details:
            'Please contact the nearest hospital and consult a doctor about a possible concussion. Please ignore if already done so. Click on the button below to email yout coach.',
        },
        {
          date: 'Nov 13',
          title: 'Impact Alert!',
          time: '02:33 PM IST',
          details:
            'Please contact the nearest hospital and consult a doctor about a possible concussion. Please ignore if already done so. Click on the button below to email yout coach.',
        },
        {
          date: 'Nov 24',
          title: 'Impact Alert!',
          time: '12:10 AM IST',
          details:
            'Please contact the nearest hospital and consult a doctor about a possible concussion. Please ignore if already done so. Click on the button below to email yout coach.',
        },
        {
          date: 'Nov 27',
          title: 'Impact Alert!',
          time: '3:47 PM IST',
          details:
            'Please contact the nearest hospital and consult a doctor about a possible concussion. Please ignore if already done so. Click on the button below to email yout coach.',
        },
      ],
    };
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => (
    <ListItem
      title={item.title}
      subtitle={item.date}
      description={item.details}
      rightSubtitle={item.time}
      bottomDivider
    />
  );

  render() {
    return (
      <>
        <Calendar
          markedDates={{
            '2019-11-04': {selected: true, selectedColor: 'red'},
            '2019-11-07': {selected: true, selectedColor: 'red'},
            '2019-11-13': {selected: true, selectedColor: 'red'},
            '2019-11-24': {selected: true, selectedColor: 'red'},
            '2019-11-27': {selected: true, selectedColor: 'red'},
          }}
          markingType={'multi-dot'}
        />

        <View>
          {this.state.itemsList.map((item, i) => (
            <ListItem
              Component={TouchableScale}
              friction={90} //
              tension={100} // These props are passed to the parent component (here TouchableScale)
              activeScale={0.95} //
              linearGradientProps={{
                colors: ['#FF9800', '#F44336'],
                start: {x: 1, y: 0},
                end: {x: 0.2, y: 0},
              }}
              ViewComponent={LinearGradient}
              onPress={() =>
                Alert.alert(
                  'Email Impact Details',
                  'Impact details will be emailed to the coach, Confirm ?',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {
                      text: 'OK',
                      onPress: () => console.log('Emailed Successfully'),
                    },
                  ],
                  {cancelable: false},
                )
              }
              title={item.title}
              subtitle={item.date}
              description={item.details}
              rightSubtitle={item.time}
              titleStyle={{color: 'white', fontWeight: 'bold'}}
              subtitleStyle={{color: 'white'}}
            />
          ))}
        </View>
      </>
    );
  }
}

class AthletesScreen extends React.Component {
  render() {
    let atheleteList = [
      {
        title: 'George North',
        position: '#3 Wing',
        email: 'georgenorth@gmail.com',
        description: `George Philip North (born 13 April 1992) is a Welsh International rugby union player who currently plays for Wales and the Ospreys in the Pro14. He has won 83 caps for Wales and 3 for the British and Irish Lions. His usual position is wing but he has also played at outside centre. \n
        North was born in 1992 in King's Lynn in England. His mother is Welsh from Anglesey, and his father is English from Yorkshire. The family moved to Anglesey when he was aged two and he is a fluent Welsh language speaker. North was educated at Ysgol Uwchradd Bodedern on Anglesey and later at Llandovery College.`,
      },
      {
        title: 'Jay Knight',
        position: '#8 Quarterback',
        email: 'jayknight@gmail.com',
        description: `My name is Jay Knight. I’m a senior at Punahou High School and play on the Varsity 1 team there. I am a quarterback for the Cougars, and have been in the USA High Performance A1 program since I was 13 years old. \n
        I live in Honolulu, Hawaii with my mom and grandmother. I have one sister, Sydney Knight, who was a member of the USA Youth National Team in 2006 and 2007, and who played libero at the University of Texas at Austin from 2008-2012. \n
        My favorite things to do when I’m not playing football are hanging at the beach courts, watching horror movies, and playing video games.`,
      },
      {
        title: 'Kelsie Lolotai',
        position: '#12 Flanker',
        email: 'kelsielolotai@gmail.com',
        description: `My name is Kelsie Lolotai, and I am a senior at the University Laboratory School in Honolulu, Hawai’i. My current GPA is a 3.89. During my free time I enjoy volunteer-coaching an 8-9 year old rugby team twice a week during a 3-4 month season. I also like to shop and go to the beach! \n
        This past year I led my Junior Varsity team to the ILH Division II championship game where we took 2nd place. Currently, I am playing for Na Keiki Mau Loa 17’s with Coach Sonja Samsonas. You can find me as #12 on the court!`,
      },
      {
        title: 'Margaret Alphonsi',
        position: '#17 Scrum-Half',
        email: 'margaretalphonsi@gmail.com',
        description: `Alphonsi was born in Lewisham, south London to Nigerian parents, and was born with club foot, which she had to overcome in order to play rugby. Alphonsi was named to the 2014 World Cup 2014 World Cup Dream Team. She retired shortly after England won the 2014 World Cup in France and now continues to coach and promote female participation and coaching in sport. \n
        She was a Rugby World Cup 2015 Ambassador and is an ambassador of several not-for-profits and charities including Peace One Day, Wooden Spoon, Sporting Equals and SKRUM which aims to give the youth of Africa hope for the future through rugby. \n
        Alphonsi with the ball during the England v Italy match in the RBS Women's 6 nations. She has played in two Rugby World Cups and in 2012 shared in a record seventh successive Six Nations title and a sixth Grand Slam in seven years. She won the Pat Marshall award from the Rugby Union Writers’ Club, where she pipped New Zealand captain, Richie McCaw, to become the first woman to claim the prize in its 50-year history. She joined Gareth Malone and other celebrities in making the 2014 Children in Need official single.`,
      },
      {
        title: 'Mark Todd',
        position: '#4 Full-Back',
        email: 'marktodd@gmail.com',
        description: `My name is Mark Todd. I live in Kailua on the island of Oʻahu, Hawaii. I’m 21 years old and I attend Punahou College. I am a 6 ‘8″, 215 lb. full-back on the Panthers Rugby team. I also played fly-half on the Panthers Rugby team. \n
        I started playing football at the age of 12. Rugby is by far my greatest passion, but I also enjoy playing beach volleyball, too. In my spare time I like to go surfing, body surfing, playing basketball and hiking. I have aspirations to play at the highest levels of collegiate football.`,
      },
      {
        title: 'Ryan Wilcox',
        position: '#5 Centre',
        email: 'ryanwilcox@gmail.com',
        description: `My name is Ryan Wilcox. I’m 25 years old and I’m from Honolulu, Hawaii. I am currently a Junior at Punahou College. As a Freshman I made the Punahou Varsity D1 team, and I’ve played American Football for the last 6 years. \n 
        I started playing at 10 years old, and its been my passion ever since. I love the game and it has always been a goal of mine to play football at the highest level possible. Aside from football, some of my other interests include surfing, kayaking, hiking, photography, and playing the ukulele.`,
      },
      {
        title: 'Sarah Hunter',
        position: '#16 Loose',
        email: 'sarahunter@gmail.com',
        description: `Hunter began playing rugby league as a 9 year old at Goathland Primary School, Longbenton and Gateshead Panthers, a fan of Super League team Wigan Warriors, she eventually quit rugby league due to lack of opposition with rugby league heartland being along the M62 Corridor and not in Newcastle, eventually she found her feet in rugby union at age 15. \n
        Hunter captained the English team in their three-Test tour of New Zealand in July 2013 and at the 2104 Women's six Nations Championship. \n
        Hunter works for the RFU as the University Rugby Development Officer for the South West. She also has coaching responsibilities with Bath Rugby Ladies, in Bath, Somerset, where she is now based. \n
        She was appointed Member of the Order of the British Empire (MBE) in the 2015 New Year Honours for services to rugby. \n
        In 2017 she took England to the final with a team that included Sarah Bern, Megan Jones and Emily Scaratt. The final against New Zealand women's national rugby union team was (to be) broadcast by ITV on a Saturday night.`,
      },
    ];
    return (
      // <View style={styles.container}>
      //   <Text style={styles.heading}>Athletes</Text>
      //   <CustomListview itemList={atheleteList} />
      // </View>

      <View>
        {atheleteList.map((item, i) => (
          <ListItem
            Component={TouchableScale}
            friction={90} //
            tension={100} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.95} //
            linearGradientProps={{
              colors: ['#FF9800', '#F44336'],
              start: {x: 1, y: 0},
              end: {x: 0.2, y: 0},
            }}
            ViewComponent={LinearGradient}
            onPress={() => this.props.navigation.navigate('Details', item)}
            title={item.title}
            subtitle={item.position}
            // description={item.details}
            // rightSubtitle={item.time}
            titleStyle={{color: 'white', fontWeight: 'bold'}}
            subtitleStyle={{color: 'white'}}
          />
        ))}
      </View>
    );
  }
}

class AtheleteDetailsScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.contentheading}>
          {navigation.getParam('title')}{' '}
          <Text style={styles.email}>
            {'( ' + navigation.getParam('email') + ' )'}
          </Text>
        </Text>
        <Text>{'\n'}</Text>
        <Paragraph>{navigation.getParam('description')}</Paragraph>
      </View>
    );
  }
}
class ImpactDetailsScreen extends React.Component {
  render() {
    let data = [
      {
        name: '(R) Rotation',
        population: 20,
        color: '#d6a95c',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: '(L) Risk Level',
        population: 64,
        color: '#e88025',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: '(G) G-Force',
        population: 15,
        color: '#f0cb65',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
    ];
    const chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: '#08130D',
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
    };
    const impactdetails = [
      {content: '(R) Rotation = 20%'},
      {content: '(G) G-Force = 15%'},
      {content: '(L) Risk Level = 64%'},
      {content: 'Number of impacts = 21'},
      {content: 'Last Sync = 12 hrs'},
    ];
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Jay Knight</Text>
        <PieChart
          data={data}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
        <Text style={styles.heading}>Impact Details</Text>
        <Card containerStyle={{padding: 0}}>
          {impactdetails.map((u, i) => {
            return <ListItem key={i} title={u.content} />;
          })}
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  heading: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentheading: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 20,
    fontStyle: 'italic',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  itemm: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

const AtheleteStack = createStackNavigator({
  Athelete: {
    screen: AthletesScreen,
    navigationOptions: {
      headerTitle: 'Athletes',
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
      },
      headerStyle: {
        backgroundColor: '#f5af47',
      },
    },
  },
  Details: {
    screen: AtheleteDetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
      },
      headerStyle: {
        backgroundColor: '#f5af47',
      },
    },
  },
});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    ImpactDetails: {
      screen: ImpactDetailsScreen,
      navigationOptions: {
        title: 'Impact Details',
        tabBarIcon: ({tintColor}) => (
          <Icon name="notes-medical" color={tintColor} size={25} />
        ),
        tabBarLabel: 'Impact Details',
      },
    },
    Home: {
      screen: ImpactsScreen,
      navigationOptions: {
        title: 'Impact Calendar',
        tabBarIcon: ({tintColor}) => (
          <Icon name="calendar" color={tintColor} size={25} />
        ),
      },
    },
    // Home: HomeScreen,
    Athletes: {
      screen: AtheleteStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="user" color={tintColor} size={25} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    barStyle: {backgroundColor: '#f5af47'},
    headerTitle: 'Home',
  },
);

const AppContainer = createAppContainer(TabNavigator);

const App = () => <AppContainer />;

export default App;
