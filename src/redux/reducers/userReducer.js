const initialState = {
  isAuthenticated: false,
  isLogining: false,
  regUserId: "",
  isSignUp: false,
  data: {},
  registrationFormState: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isAuthenticated: true,
        data: action.payload,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        isAuthenticated: false,
      };
    case "AUTHENTICATE_USER":
      return {
        ...state,
        isAuthenticated: true,
      };
    case "REGISTER_USER":
      return {
        ...state,
      };
    case "SET_USER":
      return {
        isAuthenticated: true,
        data: action.payload,
      };
    case "LOGINING_USER": {
      return {
        ...state,
        isLogining: true,
      };
    }
    case "COMPLETE_LOGINING_USER": {
      return {
        ...state,
        isLogining: false,
      };
    }
    case "SIGNING_USER": {
      return {
        ...state,
        isSignUp: true,
      };
    }
    case "COMPLETE_SIGNING_USER": {
      return {
        ...state,
        isSignUp: false,
      };
    }
    case "SET_REGISTRATION_STATE": {
      return {
        ...state,
        registrationFormState: action.payload,
      };
    }
    case "CLEAR_REGISTRATION_STATE": {
      return {
        ...state,
        registrationFormState: {},
      };
    }
    case "SET_REG_USERID": {
      return {
        ...state,
        regUserId: action.payload,
      };
    }
    case "CLEAR_REG_USERID": {
      return {
        ...state,
        regUserId: "",
      };
    }
    default:
      return state;
  }
}
