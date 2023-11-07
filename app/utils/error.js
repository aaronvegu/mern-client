/**
 *
 * error.js
 * This is a generic error handler, it receives the error returned from the server and present it on a pop up
 */

import { error } from 'react-notification-system-redux';

import { signOut } from '../containers/Login/actions';

const handleError = (err, dispatch, title = '') => {
  const unsuccessfulOptions = {
    title: `${title}`,
    message: ``,
    position: 'tr',
    autoDismiss: 1,
  };

  if (err.response) {
    if (err.response.status === 400) {
      unsuccessfulOptions.title = title ? title : 'Vuelva a intentarlo!';
      unsuccessfulOptions.message = err.response.data.error;
      dispatch(error(unsuccessfulOptions));
    } else if (err.response.status === 404) {
      // unsuccessfulOptions.title =
      //   err.response.data.message ||
      //   'Your request could not be processed. Please try again.';
      // dispatch(error(unsuccessfulOptions));
    } else if (err.response.status === 401) {
      unsuccessfulOptions.message =
        'Acceso no autorizado! Inicie sesion de nuevo';
      dispatch(signOut());
      dispatch(error(unsuccessfulOptions));
    } else if (err.response.status === 403) {
      unsuccessfulOptions.message = 'Denegado, no tiene permisos para acceder.';
      dispatch(error(unsuccessfulOptions));
    }
  } else if (err.message) {
    unsuccessfulOptions.message = err.message;
    dispatch(error(unsuccessfulOptions));
  } else {
    // fallback
    unsuccessfulOptions.message =
      'Su solicitud no pudo ser procesada, intente de nuevo mas tarde.';
  }
};

export default handleError;
