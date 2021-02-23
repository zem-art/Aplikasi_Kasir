import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    // borderWidth: 1,
    backgroundColor: '#29abe2',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    height: 130,
    backgroundColor: '#29abe2',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 30,
  },
  inbody: {
    height: 80,
    backgroundColor: '#ffffff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 10,
  },
  icon: {
    height: 80,
    width: 80,
  },
  bottom: {
    // borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inBottom: {
    height: 50,
    width: '100%',
    marginVertical: 10,
    paddingLeft: 10,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#a9a9a9',
  },
  StartBottom: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#a9a9a9',
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pactKlik: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    flexDirection: 'row',
  },
  inKlik: {
    // borderWidth: 1,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#29abe2',
  },

  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  barcode: {
    height: 25,
    width: 25,
  },
  Modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a9a9',
    paddingHorizontal: 15,
  },
  inModal: {
    backgroundColor: '#ffff',
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  inBarcode: {
    height: 70,
    width: '100%',
    marginBottom: 15,
  },
  back: {
    height: 40,
    width: 40,
  },
  pactBack: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    height: 50,
    width: '20%',
    // marginBottom: 5,
  },
  textBarcode: {
    marginVertical: 20,
    marginBottom: 20,
    // borderWidth: 1,
    height: 30,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export {styles};
