export const API_URL = process.env.API_URL;

export const SOCKET_URL =
  window.location.host.indexOf('localhost') >= 0
    ? 'http://127.0.0.1:3000'
    : window.location.host;

export const ROLES = {
  Admin: 'ROLE ADMIN',
  Member: 'ROLE MEMBER',
  Merchant: 'ROLE MERCHANT',
};

export const CART_ITEMS = 'cart_items';
export const CART_TOTAL = 'cart_total';
export const CART_ID = 'cart_id';

export const CART_ITEM_STATUS = {
  Processing: 'Procesando',
  Shipped: 'Enviado',
  Delivered: 'Entregado',
  Cancelled: 'Cancelado',
  Not_processed: 'Aun no procesado',
};

export const MERCHANT_STATUS = {
  Rejected: 'Rechazada',
  Approved: 'Aprobada',
  Waiting_Approval: 'Esperando aprobacion',
};

export const REVIEW_STATUS = {
  Rejected: 'Rechazada',
  Approved: 'Aprobada',
  Waiting_Approval: 'Esperando aprobacion',
};

export const EMAIL_PROVIDER = {
  Email: 'Email',
  Google: 'Google',
  Facebook: 'Facebook',
};
