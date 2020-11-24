# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_24_025719) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.string "activity", null: false
    t.string "name", null: false
    t.float "value", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_activities_on_user_id", unique: true
  end

  create_table "holdings", force: :cascade do |t|
    t.float "quantity", null: false
    t.integer "user_id", null: false
    t.integer "stock_id", null: false
    t.integer "pie_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pie_id"], name: "index_holdings_on_pie_id"
    t.index ["stock_id"], name: "index_holdings_on_stock_id"
    t.index ["user_id"], name: "index_holdings_on_user_id"
  end

  create_table "pies", force: :cascade do |t|
    t.string "pie_name", null: false
    t.integer "portfolio_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["portfolio_id"], name: "index_pies_on_portfolio_id"
  end

  create_table "portfolios", force: :cascade do |t|
    t.string "portfolio_name", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_portfolios_on_user_id"
  end

  create_table "stocks", force: :cascade do |t|
    t.string "ticker", null: false
    t.string "name", null: false
    t.float "price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_stocks_on_name", unique: true
    t.index ["ticker"], name: "index_stocks_on_ticker", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.float "buying_power", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
