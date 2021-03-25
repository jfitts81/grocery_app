class AddPriceToGrocerys < ActiveRecord::Migration[6.1]
  def change
      add_column :groceries, :price, :string
  end
end
