const delay = require("../util/delay");

describe("test basic connection", () => {
  const onopen = jest.fn();
  const onclose = jest.fn();
  const onmessage = jest.fn();
  const onerror = jest.fn();

  const peer = new WebSocket("ws://localhost:8080");
  peer.onopen = onopen;
  peer.onclose = onclose;
  peer.onmessage = message => onmessage(message.data);
  peer.onerror = onerror;

  test("receiving messages from server", async () => {
    await delay(1200);

    expect(onopen).toHaveBeenCalledTimes(1);
    expect(onmessage).nthCalledWith(1, "message on connect");
    expect(onmessage).nthCalledWith(2, "message after one second");
  });

  test("sending messages to server and echo back", async () => {
    peer.send("echo me");
    await delay(5);
    expect(onmessage).nthCalledWith(3, "echo me");
  });

  test("no error has occurred", () => {
    expect(onerror).not.toBeCalled();
    expect(onclose).not.toBeCalled();
  });
});
