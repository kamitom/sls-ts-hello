import { Handler } from "aws-lambda";

export type AmiboAppSyncEvent = {
  field: string;
  args: { [key: string]: any };
  identity: {
    sub: string;
    username: string;
  };
};

export type AmiboAppSyncHandler = Handler<AmiboAppSyncEvent>;
