declare module "hooks/use-toast" {
  export function useToast(): {
    toasts: Array<{
      id: string;
      title?: React.ReactNode;
      description?: React.ReactNode;
      action?: React.ReactNode;
      open: boolean;
    }>;
    toast: (props: {
      title?: React.ReactNode;
      description?: React.ReactNode;
      action?: React.ReactNode;
    }) => {
      id: string;
      dismiss: () => void;
      update: (props: {
        title?: React.ReactNode;
        description?: React.ReactNode;
        action?: React.ReactNode;
      }) => void;
    };
    dismiss: (toastId?: string) => void;
  };
}
