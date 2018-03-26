import axios from 'axios';

// const vehicles = [
//   {
//     _id: 1,
//     model: { name: 'Fiat Punto from Action' }
//   },
//   {
//     _id: 2,
//     model: { name: 'Honda HR-V' }
//   },
//   {
//     _id: 3,
//     model: { name: 'Hyundai HB20' }
//   },
// ];

export const getAllVehicles = () => {
  return (dispatch) => {
    axios.get('https://api-cdn.gruposinal.com.br/public/cars/search?brand=grupo-sinal&paginate=eyJvZmZzZXQiOjB9')
      .then((response) => {
        console.log(response)
        dispatch({
          type: 'GET_ALL_VEHICLES',
          payload: response.data.cars
        });
      });
  }
}
