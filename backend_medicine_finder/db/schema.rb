# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_25_233721) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "drug_pharmacies", force: :cascade do |t|
    t.float "price"
    t.integer "quantity"
    t.bigint "drug_id", null: false
    t.bigint "pharmacy_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["drug_id"], name: "index_drug_pharmacies_on_drug_id"
    t.index ["pharmacy_id"], name: "index_drug_pharmacies_on_pharmacy_id"
  end

  create_table "drugs", force: :cascade do |t|
    t.string "name"
    t.string "active_ingredient"
    t.string "strength"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "pharmacies", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "drug_pharmacies", "drugs"
  add_foreign_key "drug_pharmacies", "pharmacies"
end
