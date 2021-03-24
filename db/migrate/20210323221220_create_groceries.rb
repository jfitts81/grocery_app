class CreateGroceries < ActiveRecord::Migration[6.1]
  def change
    create_table :groceries do |t|
      t.string :title
      t.boolean :complete

      t.timestamps
    end
  end
end
