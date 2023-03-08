import { message } from 'antd';
import constate from 'constate';
import { ReactNode, useEffect, useState } from 'react';

type Alert = {
  status: 'error' | 'success' | 'warn';
  visible: boolean;
  message: string;
};

const useAlertMessageContext = () => {
  const [alert, setAlert] = useState<Alert>({
    visible: false,
    status: 'error',
    message: '',
  });

  return {
    alert,
    setAlert,
  };
};

type Props = {
  children: ReactNode;
};

export const [AlertProvider, useAlert, useSetAlert] = constate(
  useAlertMessageContext,
  value => value.alert,
  value => value.setAlert,
);

export default function AlertMessage({ children }: Props) {
  const alert = useAlert();
  const setAlert = useSetAlert();
  const [messageApi, contextHolder] = message.useMessage();

  const initAlert = () => {
    setAlert(p => ({ ...p, visible: false }));
  };

  useEffect(() => {
    if (!alert.visible) return;

    switch (alert.status) {
      case 'error':
        messageApi.error(alert.message);
        break;
      case 'success':
        messageApi.success(alert.message);
        break;
      case 'warn':
        messageApi.warning(alert.message);
        break;
      default:
        messageApi.info(alert.message);
    }

    initAlert();
  }, [alert]);

  return (
    <>
      {contextHolder}
      {children}
    </>
  );
}
