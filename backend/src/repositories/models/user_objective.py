from datetime import datetime
from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .base_model import Base, BigInt, IntPK, Str
from .user import User


class UserObjective(Base):
    __tablename__ = "user_objective_data"

    id: Mapped[IntPK]

    user_id: Mapped[BigInt] = mapped_column(
        ForeignKey("users.id", ondelete="CASCADE"), nullable=False
    )

    activity: Mapped[Str] = mapped_column()
    current_progress: Mapped[float] = mapped_column()
    objective: Mapped[float] = mapped_column()
    unit_of_measurement: Mapped[Str] = mapped_column()
    start_date: Mapped[datetime] = mapped_column()
    end_date: Mapped[datetime] = mapped_column()

    user: Mapped["User"] = relationship()


class UserObjectiveHistory(Base):
    __tablename__ = "user_objective_history"

    id: Mapped[IntPK]

    user_id: Mapped[BigInt] = mapped_column(
        ForeignKey("users.id", ondelete="CASCADE"), nullable=False
    )

    activity: Mapped[Str] = mapped_column()
    final_progress: Mapped[float] = mapped_column()
    objective: Mapped[float] = mapped_column()
    unit_of_measurement: Mapped[Str] = mapped_column()
    start_date: Mapped[datetime] = mapped_column()
    end_date: Mapped[datetime] = mapped_column()
    completion_percentage: Mapped[float] = mapped_column()
    status: Mapped[Str] = mapped_column()  # 'completed' or 'failed'
    created_at: Mapped[datetime] = mapped_column(default=datetime.utcnow)

    user: Mapped["User"] = relationship()

