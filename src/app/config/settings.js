const URLS = () => {

  const BASE_URL = 'https://b23.pythonanywhere.com/'
  const IMG_URL = 'https://media.motiontalentafrica.co.ke/'

  return (
    {
      "SERVER_URL": BASE_URL,
      "IMGS": IMG_URL,
      "AUTH": BASE_URL + 'api/token/',
      "REFRESH": BASE_URL + 'api/token/refresh/',
      "CATEGORIES": BASE_URL + 'categories/',
      "SUBCATEGORIES": BASE_URL + 'subcategories/',
      "PRODUCTCLASS": BASE_URL + 'productclass/',
      "CATALOG": BASE_URL + 'catalog/',
      "PAYMENTS": BASE_URL + 'payments/payments/',
      "NOTIFICATIONS": BASE_URL + 'payments/notifications/',
      "ME": BASE_URL + 'users/usersList/me',
      "USERS": BASE_URL + 'users/usersList/',
      "CLIENTS": BASE_URL + 'clients/clients/',
      "NEWS": BASE_URL + 'posts/news/',
      "EVENTS": BASE_URL + 'posts/events/',
      "FORM": BASE_URL + 'users/contactForm/',
      "ABOUT": BASE_URL + 'clients/about/',
    }
  )
}

export default URLS