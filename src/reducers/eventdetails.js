import camelize from 'camelcase-keys';

import { UPDATE_DETAIL_LIST_EVENT } from '../actions/actionTypes';
export default function(state = {}, {type, payload}) {
  switch (type) {
    case UPDATE_DETAIL_LIST_EVENT: {
      let event = camelize(payload.data.event);
      event = {...event, id: payload.user_id,event_id:payload.event_id};
      return {
        event: event
      };
    }
    default: {
      return state;
    }
  }
}