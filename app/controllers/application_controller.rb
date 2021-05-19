class ApplicationController < ActionController::API
  # --- ここから追加 ---
    before_action :fake_load

    def fake_load
      sleep(1)
    end
  # --- ここまで追加 ---
  end
