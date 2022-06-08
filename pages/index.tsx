import { Button, Modal, Page, Text, useModal, useToasts } from '@geist-ui/core';
import { useState } from 'react';
import Typed from 'react-typed';
import _ from 'lodash';

export default function Home() {
  const [count, setCount] = useState(0);
  const { setVisible, bindings } = useModal();
  const { setVisible: setVisible1, bindings: bindings1 } = useModal();
  const { setToast } = useToasts({ placement: 'topRight' });
  const [position, setPosition] = useState<any>({
    top: 85.2,
    left: 126 + 21.44 + 8,
  });

  return (
    <Page style={{ position: 'relative' }}>
      <Text h5>
        <Typed strings={['Làm người yêu anh nhé?']} typeSpeed={40} />
      </Text>

      <Modal {...bindings}>
        <Modal.Title>Thật luôn?</Modal.Title>
        <Modal.Content>
          <p>Anh nghĩ rằng chúng ta có rất nhiều điểm tương đồng đó</p>
        </Modal.Content>
        <Modal.Action onClick={() => setVisible(false)}>Ok</Modal.Action>
      </Modal>

      <Modal {...bindings1}>
        <Modal.Content>
          <p>Rất mong mai được gặp em 💗</p>
        </Modal.Content>
        <Modal.Action onClick={() => setVisible1(false)}>💘</Modal.Action>
      </Modal>

      <Button onClick={() => setVisible1(true)} type="success" scale={0.5}>
        Đồng ý
      </Button>
      <Button
        onMouseOver={() => {
          if (count === 12) {
            setToast({
              text: 'Đừng đuổi nút này nữa, để anh đến với em',
              delay: 10000,
            });
          }
          if (count > 7) {
            const top = _.random(0, 70, true);
            const left = _.random(0, 70, true);

            setPosition({ top: `${top}vh`, left: `${left}vw` });

            setCount((prev) => prev + 1);
          }
        }}
        onClick={() => {
          if (count < 2 || count > 7) {
            const top = _.random(0, 70, true);
            const left = _.random(0, 70, true);

            setPosition({ top: `${top}vh`, left: `${left}vw` });
          }

          if (count === 2) {
            setVisible(true);
          }

          if (count === 3) {
            setToast({
              text: 'Mỗi lần gặp được em là 1 ngày hoàn hảo đối  của anh.',
              type: 'success',
              delay: 10000,
            });
          }

          if (count === 4) {
            setToast({
              text: 'Em à, em đã đánh cắp trái tim anh mà sao lỡ nói không?',
              type: 'default',
              delay: 10000,
            });
          }

          if (count === 6 || count === 7) {
            const top = _.random(0, 70, true);
            const left = _.random(0, 70, true);

            setPosition({ top: `${top}vh`, left: `${left}vw` });
          }

          setCount((prev) => prev + 1);
        }}
        scale={0.5}
        style={{
          position: 'absolute',
          ...position,
        }}>
        Từ chối
      </Button>
    </Page>
  );
}
