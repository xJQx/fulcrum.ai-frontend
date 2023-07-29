import { serverBaseUrl } from "config/server";
import { LocalStorageEnum } from "types/enums";

/* Helper functions */
const parseRequestEndpoint = (endpoint: string) => {
  // trim the '/' at the start of the endpoint to prevent double '//'
  if (endpoint.startsWith("/")) endpoint = endpoint.substring(1);
  return "api/" + endpoint;
};
const handleResponse = async (response: Response) => {
  if (response.ok) return response.json();

  // Status not ok
  try {
    const data = await response.json();
    return Promise.reject(data || response.status);
  } catch {
    // Could not parse the JSON
    return Promise.reject(response.status);
  }
};

/**
  
  @summary Fetch api wrapper function (hook) which adds authentication headers automically to the request, as well as parse endpoints and responses
  @tutorial
  const fetch = useFetch()

  fetch.get('endpoint1')

  fetch.post('endpoint1', { dataField1: 1, dataField2: 'cat' }, 'form')

  fetch.put('endpoint1', { dataField1: 1, dataField2: 'cat' }, 'form')

  fetch._delete('endpoint1')
*/
const useFetch = () => {
  const getAuthHeader = () => {
    const access_token = localStorage.getItem(LocalStorageEnum.access_token);
    let authHeader = {};
    if (access_token) authHeader = { Authorization: `Bearer ${access_token}` };
    return authHeader;
  };

  const get = async (endpoint: string) => {
    endpoint = parseRequestEndpoint(endpoint);

    const requestOptions = {
      method: "GET",
      headers: getAuthHeader(),
    };
    const response = await fetch(serverBaseUrl + endpoint, requestOptions);
    return handleResponse(response);
  };

  const post = async (
    endpoint: string,
    body: unknown,
    bodyType: "form" | "json"
  ) => {
    endpoint = parseRequestEndpoint(endpoint);

    // json
    if (bodyType === "json") {
      const requestOptions = {
        // json data
        method: "POST",
        headers: { "Content-Type": "application/json", ...getAuthHeader() },
        body: JSON.stringify(body),
      };
      const response = await fetch(serverBaseUrl + endpoint, requestOptions);
      return handleResponse(response);
    }

    // form data
    if (bodyType === "form") {
      const requestOptions = {
        method: "POST",
        headers: { ...getAuthHeader() },
        body: body as FormData,
      };
      const response = await fetch(serverBaseUrl + endpoint, requestOptions);
      return handleResponse(response);
    }
  };

  const put = async (
    endpoint: string,
    body: unknown,
    bodyType: "form" | "json"
  ) => {
    endpoint = parseRequestEndpoint(endpoint);

    // json
    if (bodyType === "json") {
      const requestOptions = {
        // json data
        method: "PUT",
        headers: { "Content-Type": "application/json", ...getAuthHeader() },
        body: JSON.stringify(body),
      };
      const response = await fetch(serverBaseUrl + endpoint, requestOptions);
      return handleResponse(response);
    }

    // form data
    if (bodyType === "form") {
      const requestOptions = {
        method: "PUT",
        headers: { ...getAuthHeader() },
        body: body as FormData,
      };
      const response = await fetch(serverBaseUrl + endpoint, requestOptions);
      return handleResponse(response);
    }
  };

  // prefixed with underscored because delete is a reserved word in javascript
  const _delete = async (endpoint: string) => {
    endpoint = parseRequestEndpoint(endpoint);

    const requestOptions = {
      method: "DELETE",
      headers: getAuthHeader(),
    };
    const response = await fetch(serverBaseUrl + endpoint, requestOptions);
    return handleResponse(response);
  };

  return { get, post, put, _delete };
};

export default useFetch;
