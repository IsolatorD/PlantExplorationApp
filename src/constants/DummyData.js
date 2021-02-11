import images from "./images";

export const newPlants = [
  {
    id: 0,
    name: 'Plant 1',
    img: images.plant1,
    favourite: false
  },
  {
    id: 1,
    name: 'Plant 2',
    img: images.plant2,
    favourite: true
  },
  {
    id: 2,
    name: 'Plant 3',
    img: images.plant3,
    favourite: false
  },
  {
    id: 3,
    name: 'Plant 4',
    img: images.plant4,
    favourite: false
  },
]

export const friendList = [
  {
    id: 0,
    img: images.profile1
  },
  {
    id: 1,
    img: images.profile2
  },
  {
    id: 2,
    img: images.profile3
  },
  {
    id: 3,
    img: images.profile4
  },
  {
    id: 4,
    img: images.profile5
  }
]

export default {
  newPlants,
  friendList
}