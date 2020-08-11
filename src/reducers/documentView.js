

const initialState = {
  title: "New document"
  paragraphs: {
    styles: {

    },
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit pellentesque ante, id laoreet arcu laoreet eget. Mauris nunc metus, feugiat in magna tristique, molestie vehicula mauris. Donec lorem neque, mollis sed elit eget, venenatis euismod dui. Nulla finibus scelerisque dui vel pharetra. Nunc et lectus venenatis, rutrum velit sed, egestas metus. Pellentesque nec volutpat tellus. Curabitur bibendum nulla erat, in blandit mauris porttitor vitae."
  }
}

function documentReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TITLE: {
      return {
        ...state,
        title: action.payload.title
      };
    }
    case UPDATE_PARAGRAPH: {
      return {
        ...state,
        paragraphs: state.
      };
    }
    case REMOVE_PARAGRAPH: {

    }
    case ADD_PARAGRAPH: {

    }
    default: {
      return state;
    }
}
