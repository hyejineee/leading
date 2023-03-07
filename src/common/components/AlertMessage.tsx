import constate from 'constate';
import { ReactNode, useState } from 'react';

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

  return <div>{children}</div>;
}
