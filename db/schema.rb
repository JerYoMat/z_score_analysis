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

ActiveRecord::Schema.define(version: 2019_03_24_003315) do

  create_table "companies", force: :cascade do |t|
    t.string "companyname"
    t.string "primarysymbol"
    t.string "primaryexchange"
    t.string "siccode"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "favorites", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "financial_periods", force: :cascade do |t|
    t.integer "company_id"
    t.integer "fiscalyear"
    t.string "periodenddate"
    t.integer "ebit"
    t.integer "totalcurrentassets"
    t.integer "totalcurrentliabilities"
    t.integer "totalassets"
    t.integer "retainedearnings"
    t.integer "totalliabilities"
    t.integer "totalrevenue"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_financial_periods_on_company_id"
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
