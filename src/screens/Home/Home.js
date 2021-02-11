import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import { COLORS, FONTS, icons, SIZES, DummyData, images } from '../../constants'

const Home = ({ navigation }) => {
  // DummyData
  const [newPlants, setNewPlants] = useState(DummyData.newPlants)
  const [friendList, setFriendList] = useState(DummyData.friendList)


  function renderNewPlants(item, i) {
    return (
      <View
        style={styles.plantCard}
      >
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            width: SIZES.width * 0.23,
            height: '82%',
            borderRadius: 15
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: '17%',
            right: 0,
            backgroundColor: COLORS.primary,
            paddingHorizontal: SIZES.base,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body4
            }}
          >
            {item.name}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '15%',
            left: 7
          }}
          onPress={() => console.log('favourite')}
        >
          <Image
            source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20
            }}
          />
        </TouchableOpacity>
      </View>
    )
  }

  function renderFriends () {
    if (friendList.length == 0) {
      return (
        <View></View>
      )
    } else if (friendList.length <= 3) {
      return (
        friendList.map((item, i) => (
          <View
            key={`friend-${i}`}
            style={i === 0 ? {} : { marginLeft: -20 }}
          >
            <Image
              source={item.img}
              resizeMode="cover"
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                borderWidth: 3,
                borderColor: COLORS.primary
              }}
            />
          </View>
        ))
      )
    } else {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          {friendList.map((item, i) => {
            if (i <= 2) {
              return (
                <View
                  key={`friend-${i}`}
                  style={i === 0 ? {} : { marginLeft: -20 }}
                >
                  <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      borderWidth: 3,
                      borderColor: COLORS.primary
                    }}
                  />
                </View>
              )
            }
          })}
          <Text
            style={{
              marginLeft: 5,
              color: COLORS.secondary,
              ...FONTS.body3
            }}
          >
            +{friendList.length - 3} More
          </Text>
        </View>
      )
    }
  }

  return (
    <View
      style={styles.container}
    >
      {/* New Plants */}
      <View
        style={styles.newPlantsContainer}
      >
        <View
          style={styles.newPlantsSection}
        >
          <View
            style={styles.newPlantsSectionInternal}
          >
            <View
              style={styles.newPlantsTitleContainer}
            >
              <Text
                style={styles.newPlantsTitle}
              >
                New Plants
              </Text>
              <TouchableOpacity
                onPress={() => console.log('press button')}
              >
                <Image
                  source={icons.focus}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{marginTop: SIZES.base}}
            >
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={newPlants}
                keyExtractor={item => item.id.toString()}
                renderItem={({item, i}) => renderNewPlants(item, i)}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Today´s Share */}
      <View
        style={styles.todayShareContainer}
      >
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.white
          }}
        >
          <View
            style={{
              marginTop: SIZES.font,
              marginHorizontal: SIZES.padding
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Text
                style={{
                  color: COLORS.secondary,
                  ...FONTS.h2
                }}
              >
                Today´s Share
              </Text>
              <TouchableOpacity
                onPress={() => console.log('see all')}
              >
                <Text
                  style={{
                    color: COLORS.secondary,
                    ...FONTS.body3
                  }}
                >
                  See All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: '88%',
              marginTop: SIZES.base
            }}
          >
            <View
              style={{
                flex: 1
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1
                }}
                onPress={() => { navigation.navigate('PlantDetail') }}
              >
                <Image
                  source={images.plant5}
                  resizeMode="cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 20
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  marginTop: SIZES.font
                }}
                onPress={() => { navigation.navigate('PlantDetail') }}
              >
                <Image
                  source={images.plant6}
                  resizeMode="cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 20
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1.3
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  marginLeft: SIZES.font
                }}
                onPress={() => { navigation.navigate('PlantDetail') }}
              >
                <Image
                  source={images.plant7}
                  resizeMode="cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 20
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>

      {/* Added Friend */}
      <View
        style={styles.addedFriendContainer}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.lightGray
          }}
        >
          <View
            style={{
              marginTop: SIZES.radius,
              marginHorizontal: SIZES.padding
            }}
          >
            <Text
              style={{
                color: COLORS.secondary,
                ...FONTS.h2
              }}
            >
              Added Friend
            </Text>
            <Text
              style={{
                color: COLORS.secondary,
                ...FONTS.body3
              }}
            >
              {friendList.length} Total
            </Text>

            <View
              style={{
                flexDirection: 'row',
                height: '60%'
              }}
            >
              {/* Friends */}
              <View
                style={{
                  flex: 1.3,
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                {renderFriends()}
              </View>
              {/* Add Friend */}
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end'
                }}
              >
                <Text
                  style={{
                    color: COLORS.secondary,
                    ...FONTS.body3
                  }}
                >
                  Add New
                </Text>
                <TouchableOpacity
                  style={{
                    marginLeft: SIZES.base,
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.gray
                  }}
                  onPress={() => { console.log('add new pressed') }}
                >
                  <Image
                    source={icons.plus}
                    resizeMode="contain"
                    style={{
                      width: 20,
                      height: 20
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  newPlantsContainer: {
    height: '30%',
    backgroundColor: COLORS.white
  },
  newPlantsSection: {
    flex: 1,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: COLORS.primary
  },
  newPlantsSectionInternal: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding
  },
  newPlantsTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  newPlantsTitle: {
    color: COLORS.white,
    ...FONTS.h2
  },
  plantCard: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SIZES.base
  },
  todayShareContainer: {
    height: '50%',
    backgroundColor: COLORS.lightGray
  },
  addedFriendContainer: {
    height: '20%',
    backgroundColor: COLORS.lightGray
  },
})

export default Home