# encoding: UTF-8
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
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120916054016) do

  create_table "businesses", :force => true do |t|
    t.string   "title"
    t.string   "address"
    t.decimal  "lat",        :precision => 25, :scale => 21
    t.decimal  "long",       :precision => 25, :scale => 21
    t.string   "image_url"
    t.string   "yelp_url"
    t.string   "yelp_id"
    t.datetime "created_at",                                 :null => false
    t.datetime "updated_at",                                 :null => false
  end

  create_table "crimes", :force => true do |t|
    t.string   "crime_type"
    t.string   "address"
    t.decimal  "lat",          :precision => 25, :scale => 21
    t.decimal  "long",         :precision => 25, :scale => 21
    t.datetime "date"
    t.integer  "spotcrime_id"
    t.datetime "created_at",                                   :null => false
    t.datetime "updated_at",                                   :null => false
  end

  create_table "hotels", :force => true do |t|
    t.string   "address"
    t.string   "name"
    t.string   "city"
    t.text     "images"
    t.decimal  "lat",            :precision => 25, :scale => 21
    t.decimal  "long",           :precision => 25, :scale => 21
    t.integer  "zip"
    t.string   "price"
    t.decimal  "level",          :precision => 10, :scale => 0
    t.integer  "crime_count"
    t.string   "listing_url"
    t.string   "listing_id"
    t.text     "listing_header"
    t.decimal  "rating",         :precision => 2,  :scale => 1
    t.datetime "created_at",                                     :null => false
    t.datetime "updated_at",                                     :null => false
  end

  create_table "houses", :force => true do |t|
    t.string   "listing_id",     :limit => 32
    t.string   "listing_url"
    t.integer  "price"
    t.text     "listing_header"
    t.string   "address"
    t.string   "city"
    t.integer  "zip"
    t.text     "images"
    t.decimal  "lat",                          :precision => 25, :scale => 21
    t.decimal  "long",                         :precision => 25, :scale => 21
    t.datetime "created_at",                                                   :null => false
    t.datetime "updated_at",                                                   :null => false
    t.datetime "date"
    t.integer  "crime_count"
    t.decimal  "level",                        :precision => 5,  :scale => 2
    t.string   "size"
    t.string   "bedrooms",       :limit => 32
  end

  create_table "points", :force => true do |t|
    t.decimal  "lat",        :precision => 25, :scale => 21
    t.decimal  "long",       :precision => 25, :scale => 21
    t.decimal  "level",      :precision => 5,  :scale => 3
    t.integer  "num_crimes"
    t.datetime "created_at",                                 :null => false
    t.datetime "updated_at",                                 :null => false
  end

  create_table "schools", :force => true do |t|
    t.string   "name"
    t.string   "level"
    t.string   "address"
    t.decimal  "lat",         :precision => 10, :scale => 0
    t.decimal  "long",        :precision => 10, :scale => 0
    t.string   "listing_url"
    t.datetime "created_at",                                 :null => false
    t.datetime "updated_at",                                 :null => false
  end

  create_table "testthingies", :force => true do |t|
    t.string   "title"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "utils", :force => true do |t|
    t.text "query"
    t.text "time"
    t.text "page"
  end

end
