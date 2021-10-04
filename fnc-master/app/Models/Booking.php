<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [ 'flight_from', 'flight_back', 'date_from', 'date_back', 'code' ];

    public function flightFrom()
    {
        return $this->hasOne(Flight::class, 'id', 'flight_from');
    }

    public function flightBack()
    {
        return $this->hasOne(Flight::class, 'id', 'flight_back');
    }

    public function passengers()
    {
        return $this->hasMany(Passengers::class, 'booking_id', 'id');
    }

    public function getCost()
    {
        $cost = $this->flightFrom->cost;

        if($this->flightBack) {
            $cost += $this->flightBack->cost;
        }

        return $cost * $this->passengers()->count();
    }
}
