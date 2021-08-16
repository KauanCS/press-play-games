import { useState, useEffect, useCallback } from 'react';

import api from '../services/api';

export const useRequest = (
  method,
  url,
  data,
  awaitTrigger = false,
) => {
  const [state, setState] = useState({
    response: null,
    pending: true,
    error: null,
  });

  const [payload, setPayload] = useState(data);

  // const fetch = (data) => setState((prev) => { ...prev, data});

  const sendRequest = useCallback((_payload) => {
    api[method](url, _payload).then((res) => {
      setState((prev) => ({ ...prev, response: res, pending: false }));
    }).catch((err) => {
      setState((prev) => ({ ...prev, error: err, pending: false }));
    });
  }, [method, url]);

  useEffect(() => {
    if (!awaitTrigger) return;
    sendRequest(payload);
  }, [sendRequest, payload]);

  const [error, pending, response] = state;

  return [response, pending, error, sendRequest];
};
