// REQUEST_STATEはAPIリクエスト中に画面がいまどういう状態なのか？を知るための状態です。
// REQUEST_STATE.LOADINGであればAPIリクエスト中としてローディング(くるくる回るUI)を出せますし、
// REQUEST_STATE.OKであれば成功したアラートを出すこともできます。
export const REQUEST_STATE = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  OK: 'OK',
}

export const HTTP_STATUS_CODE = {
  NOT_ACCEPTABLE: 406,
}
