# useConfirm
- useConfirm 훅은 주로 사용자의 확인(Confirm) 동작을 필요로 하는 시나리오에서 사용됩니다. 
- 예를 들어, “정말 삭제하시겠습니까?” 같은 질문을 사용자에게 보여주고, 그에 대한 응답(확인 또는 취소)을 처리하는 데 유용합니다.


### 1. 직접 구현하는 useConfirm 훅 예제
#### useConfirm
```tsx
// useConfirm.ts
import { useState, useCallback } from 'react';

export function useConfirm() {
  const [isOpen, setIsOpen] = useState(false);
  const [resolve, setResolve] = useState<(value: boolean) => void>(() => () => {});

  const confirm = useCallback((): Promise<boolean> => {
    setIsOpen(true);
    return new Promise<boolean>((res) => {
      setResolve(() => res);
    });
  }, []);

  const handleConfirm = () => {
    setIsOpen(false);
    resolve(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
    resolve(false);
  };

  return {
    isOpen,
    confirm,
    handleConfirm,
    handleCancel,
  };
}
```

#### ComfirmDialog.tsx
```tsx
// ConfirmDialog.tsx
import React from 'react';

export const ConfirmDialog = ({
  isOpen,
  onConfirm,
  onCancel,
  message,
}: {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <p>{message}</p>
      <button onClick={onConfirm}>확인</button>
      <button onClick={onCancel}>취소</button>
    </div>
  );
};
```

#### App.tsx
```tsx
// App.tsx
import React from 'react';
import { useConfirm } from './useConfirm';
import { ConfirmDialog } from './ConfirmDialog';

export default function App() {
  const { isOpen, confirm, handleConfirm, handleCancel } = useConfirm();

  const handleDelete = async () => {
    const result = await confirm();
    if (result) {
      alert('삭제되었습니다!');
    } else {
      alert('삭제가 취소되었습니다.');
    }
  };

  return (
    <>
      <button onClick={handleDelete}>삭제</button>
      <ConfirmDialog
        isOpen={isOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        message="정말 삭제하시겠습니까?"
      />
    </>
  );
}
```


### 2. 라이브러리 사용: react-confirm-alert
- 이미 구현된 라이브러리를 활용하고 싶다면 react-confirm-alert 같은 것을 사용할 수 있습니다.
- npm install react-confirm-alert
```tsx
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const handleDelete = () => {
  confirmAlert({
    title: '확인',
    message: '정말 삭제하시겠습니까?',
    buttons: [
      {
        label: '예',
        onClick: () => alert('삭제됨'),
      },
      {
        label: '아니오',
        onClick: () => alert('취소됨'),
      },
    ],
  });
};
```
