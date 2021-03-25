class AddDescToGrocerys < ActiveRecord::Migration[6.1]
  def change
    add_column :groceries, :desc, :text
end
end
