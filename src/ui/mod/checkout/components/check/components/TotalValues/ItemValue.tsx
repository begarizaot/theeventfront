interface IItemValueProps {
  title: string;
  quantity?: number;
  price: number;
  icon?: string;
}

export const ItemValue = ({
  price,
  quantity,
  title,
  icon,
}: IItemValueProps) => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-base">{title}</p>
      <div className="flex items-center gap-2">
        {icon && <span className={`pi ${icon} textPrimary`}></span>}
        {quantity && <span className="text-xs">{quantity} x</span>}
        <p className="font-bold text-lg">${price}</p>
      </div>
    </div>
  );
};
