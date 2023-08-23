<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\View\View;
use App\Models\User;
class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): View
    {
        return view('auth.login');
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(route('profile'))->with('access-send', 'Вы успешный пидорас');
    }

    /**
     * Gogole Oauthintivikation2
     */
    public function OAuth()
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * Gogole Oauthintivikation2
     */
    public function callback()
    {
        $Social = Socialite::driver('google')->user();

        $user = User::updateOrCreate([
            'provider_id' => $Social->id,
            'provider' => 'google'
        ], [
            'name' => $Social->name,
            'email' => $Social->email,
            'provider_token' => $Social->token,
        ]);
     
        Auth::login($user);

        return redirect()->route('profile');
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}