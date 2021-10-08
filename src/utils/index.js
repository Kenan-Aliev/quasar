export default {
  userLogin: {
    presence: true,
    format: {
      pattern: /^[A-Za-z\d@.]+$/,
      message: 'Invalid username!'
    },
    length: {
      maximum: 20,
      minimum: 3,
      message: 'Длина username должно быть больше 3 и меньше 20'
    }
  },
  FIO:{
    presence: true,
    format: {
      pattern: /^[A-Za-zА-Яа-я\s]+$/,
      message: 'Введите правильно ФИО'
    }
  },
  name:{
    presence: true,
    format: {
      pattern: /^[A-Za-zА-Яа-я]+$/,
      message: 'Введите правильно имя'
    }
  },

  password: {
    presence: true,
    format: {
      pattern: /^[a-z\d!_]+$/,
      message: 'Invalid password!'
    },
    length: {
      maximum: 10,
      minimum: 6,
      message: 'Длина password должно быть больше 6 и меньше 10'
    }
  }
}
