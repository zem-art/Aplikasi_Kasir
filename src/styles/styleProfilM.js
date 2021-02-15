import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    // borderWidth: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9C900',
    paddingHorizontal: 20,
  },
  title: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  profile: {
    height: 180,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9C900',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  inBody: {
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '70%',
    width: '33%',
    backgroundColor: '#ffff',
    borderRadius: 5,
    marginBottom: 7,
  },
  qrCode: {
    height: 100,
    width: 100,
  },
  pactName: {
    alignItems: 'center',
  },
  textData: {
    color: '#ffff',
    marginBottom: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  body: {
    // flex: 1,
    backgroundColor: '#fff',
    marginTop: 5,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  inBodyBottom: {
    elevation: 7,
    // borderWidth: 1,
    height: 240,
    width: '100%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  pactinBottom: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingBottom: 10,
    marginVertical: 3,
    height: 45,
    // borderWidth: 1,
    borderBottomColor: '#a9a9',
  },
  iconCircle: {
    height: 25,
    width: 25,
    marginRight: 10,
    marginLeft: 5,
  },
  bottom: {height: 50},
});

export {styles};
