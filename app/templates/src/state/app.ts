export const INIT_APP_STATE = {
  email: '',
};

const CHANGE_VAL = 'CHANGE_VAL';
const RESET_STATE = 'RESET_STATE';

export const onChangeStateValue = (field: string, value: any): any => ({
  type: CHANGE_VAL, payload: {field, value},
});

export const onResetState = (): any => ({
  type: RESET_STATE,
});

export default (state = INIT_APP_STATE, action: any = {}): any => {
  switch (action.type) {
    case CHANGE_VAL: {
      const {field, value} = action.payload;

      return {...state, [field]: value};
    }

    case RESET_STATE:
      return INIT_APP_STATE;

    default:
      return state;
  }
};
