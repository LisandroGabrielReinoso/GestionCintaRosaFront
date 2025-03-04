const SummaryCard = ({ title, count, highlight }: { title: string, count: number, highlight?: boolean }) => {
    return (
      <div className={`p-4 rounded-xl shadow-lg ${highlight ? "bg-red-600" : "bg-gray-800"}`}>
        <h3 className="text-lg font-semibold text-gray-300">{title}</h3>
        <p className="text-2xl font-bold text-gold-400">{count}</p>
      </div>
    );
  };

  export default SummaryCard;